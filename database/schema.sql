-- Enable Required Extensions & Domain Enums
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE campaign_category AS ENUM ('education', 'medical', 'emergency', 'community', 'innovation');
CREATE TYPE campaign_status AS ENUM ('draft', 'pending_review', 'active', 'paused', 'completed', 'rejected');
CREATE TYPE donation_status AS ENUM ('pending', 'successful', 'failed', 'refunded');

-- 1. Users & Verified Student Beneficiaries
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    institution_name VARCHAR(255),
    student_reg_number VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    didit_session_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Campaigns Engine
CREATE TABLE campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    creator_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category campaign_category NOT NULL,
    story TEXT NOT NULL,
    cover_image_url TEXT NOT NULL,
    target_amount NUMERIC(15, 2) NOT NULL CHECK (target_amount > 0),
    current_amount NUMERIC(15, 2) DEFAULT 0.00 CHECK (current_amount >= 0),
    currency VARCHAR(3) DEFAULT 'UGX',
    status campaign_status DEFAULT 'pending_review',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Immutable Donation Ledger
CREATE TABLE donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    donor_name VARCHAR(150) DEFAULT 'Anonymous',
    donor_email VARCHAR(255) NOT NULL,
    donor_phone VARCHAR(20) NOT NULL,
    amount NUMERIC(15, 2) NOT NULL CHECK (amount > 0),
    transaction_ref VARCHAR(100) UNIQUE NOT NULL,
    nylon_transaction_id VARCHAR(100),
    status donation_status DEFAULT 'pending',
    is_anonymous BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fast Lookup Indices & Stored Procedure for Safe Race-Free Balance Updates
CREATE INDEX idx_donations_tx_ref ON donations(transaction_ref);

CREATE OR REPLACE FUNCTION increment_campaign_balance(c_id UUID, inc_amount NUMERIC)
RETURNS void AS $$
BEGIN
    UPDATE campaigns
    SET current_amount = current_amount + inc_amount,
        updated_at = NOW()
    WHERE id = c_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

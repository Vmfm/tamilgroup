-- Enable Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages
CREATE POLICY "Allow public insert"
ON messages
FOR INSERT
TO public
USING (true);

-- Allow anyone to select (read) messages
CREATE POLICY "Allow public read"
ON messages
FOR SELECT
TO public
USING (true);

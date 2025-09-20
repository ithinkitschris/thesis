import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const positionsFilePath = path.join(process.cwd(), 'src', 'lib', 'positions.json');

export async function GET() {
  try {
    // Check if file exists, if not create it with empty object
    if (!fs.existsSync(positionsFilePath)) {
      fs.writeFileSync(positionsFilePath, '{}');
    }
    
    const data = fs.readFileSync(positionsFilePath, 'utf8');
    const positions = JSON.parse(data);
    
    return NextResponse.json(positions);
  } catch (error) {
    console.error('Error reading positions:', error);
    return NextResponse.json({ error: 'Failed to read positions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { positions } = await request.json();
    
    // Validate that positions is an object
    if (typeof positions !== 'object' || positions === null) {
      return NextResponse.json({ error: 'Invalid positions data' }, { status: 400 });
    }
    
    // Write positions to file
    fs.writeFileSync(positionsFilePath, JSON.stringify(positions, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving positions:', error);
    return NextResponse.json({ error: 'Failed to save positions' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    // Reset positions to empty object
    fs.writeFileSync(positionsFilePath, '{}');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error resetting positions:', error);
    return NextResponse.json({ error: 'Failed to reset positions' }, { status: 500 });
  }
}

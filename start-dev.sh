#!/bin/bash

# SIYB Platform Development Server Starter
echo "Starting SIYB Platform Development Environment..."

# Check if virtual environment exists
if [ ! -d ".venv" ]; then
    echo "Virtual environment not found. Please run setup.sh first."
    exit 1
fi

# Activate virtual environment
echo " Activating Python virtual environment..."
source .venv/bin/activate

# Function to start backend
start_backend() {
    echo "Starting Django backend server..."
    cd backend
    python manage.py runserver
}

# Function to start frontend (Vite React app)
start_frontend() {
    echo "Starting Vite React frontend server..."
    cd frontend
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing frontend dependencies..."
        npm install
    fi
    npm run dev
}

# Start both servers in parallel
echo " Starting both servers..."
start_backend &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

start_frontend &
FRONTEND_PID=$!

echo "Servers started!"
echo "Backend: http://localhost:8000"
echo "Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Function to cleanup on exit
cleanup() {
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit
}

# Set trap to cleanup on Ctrl+C
trap cleanup SIGINT

# Wait for both processes
wait $BACKEND_PID
wait $FRONTEND_PID
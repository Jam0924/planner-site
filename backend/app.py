from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/task_data")
def get_tasks():
    mock_tasks = [
        {
            "id": 1,
            "title": "Finish React UI",
            "description": "Map over the task array and render the flexbox task cards.",
            "tags": ["coding", "frontend"],
            "date_due": "2026-09-30T22:00:00Z",
            "completed": True,
            "date_completed": "2026-09-30T19:45:00Z"
        },
        {
            "id": 2,
            "title": "Morning Cardio",
            "description": "Get in a 35-minute treadmill workout to start the new month strong.",
            "tags": ["fitness", "health"],
            "date_due": "2026-10-01T07:00:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 3,
            "title": "Read chapters 4 & 5",
            "description": "Finish the assigned reading before the 8:30 AM class.",
            "tags": ["school", "homework"],
            "date_due": "2026-10-01T08:30:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 4,
            "title": "Prep weekly lunches",
            "description": "Batch cook some pasta and rice-based meals so they are ready to grab.",
            "tags": ["cooking", "meal-prep"],
            "date_due": "2026-10-04T15:00:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 5,
            "title": "Set up Flask Database",
            "description": "Initialize SQLite and create the Tasks table with the new schema.",
            "tags": ["coding", "backend"],
            "date_due": "2026-10-03T20:00:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 6,
            "title": "Restock snacks",
            "description": "Pick up more READY protein bars, soda, and water from the store.",
            "tags": ["groceries", "errands"],
            "date_due": "2026-10-02T18:00:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 7,
            "title": "Review lecture slides",
            "description": "Download the PDF and review notes before the 10:00 AM class.",
            "tags": ["school", "study"],
            "date_due": "2026-10-02T10:00:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 8,
            "title": "Write auto-delete script",
            "description": "Create a cron job or background task to clear out tasks 30 days after date_completed.",
            "tags": ["coding", "maintenance"],
            "date_due": "2026-10-10T12:00:00Z",
            "completed": False,
            "date_completed": None
        },
        {
            "id": 9,
            "title": "Define Task Schema",
            "description": "Finalize the data structure for id, title, description, and dates.",
            "tags": ["coding", "planning"],
            "date_due": "2026-09-29T12:00:00Z",
            "completed": True,
            "date_completed": "2026-09-29T16:20:00Z"
        },
        {
            "id": 10,
            "title": "Test tag rendering",
            "description": "Make sure the React frontend can map over an array of tags inside the main map loop.",
            "tags": ["coding", "testing", "ui"],
            "date_due": "2026-10-05T12:00:00Z",
            "completed": False,
            "date_completed": None
        }
    ]

    return {"tasks" : mock_tasks}

if __name__ == '__main__':
    app.run(debug = True, port=5000)
## Running the Application Locally

### Requirements

-- **Node.js**: v24.x (LTS recommended)
-- **npm**: v11.x
-- **Python**: 3.12.x

### 1. Clone the Repository

In order to run the app locally, you should clone the repository on your local device. In your command terminal (with git installed), run the following:

```bash
git clone https://github.com/Jam0924/planner-site planner_site
cd planner_site
```

### 2. Running the front-end locally

The study-planner utilizies a React based front end, therefore in order to run the site locally you will need to install Node.js with npm on your device. See requirements listed above for the version to download. After installing, to run the web application for the first time use the following command:

```bash
cd frontend
npm install
npm run dev
```

For subsequent runs of the web application, you can use the omit the 'npm install' line like the following:

```bash
cd frontend
npm run dev
```

The website should open on a local host of your computer. Do not close this terminal until you are ready for the website to terminate. 

### 3. Running the back-end locally

The backend is built using Python's flask library.  To run the backend locally, you will need to download the python version specified above. Additionally, the backend must be run in a concurrent terminal without closing the one that the frontend is currently running on. After making a new terminal, I recommend first making a virtual enviornment using the following commands:

```bash
cd backend
python -m venv .venv
```

Then, you can activate the venv using the following commands on your respective machine:

**MacOS/Linux:**
```bash
source .venv/bin/activate
```
**Windows Powershell:**
```powershell
.venv\Scripts\Activate.ps1
```

Then, install the dependences for the site to actually operate with the following command (make sure you are in your venv!)

```bash
pip install -r requirements.txt
```

And lastly, to run the backend locally on your machine, use the following command:

```bash
python app.py
```



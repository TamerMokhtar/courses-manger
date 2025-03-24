# courses-manger
A simple Command Line Interface (CLI) tool for managing TO courses. This tool allows you to add new courses and list all existing courses.

## Features

- **Add a new course**: Add a course with a title and price.
- **List all courses**: Display all courses in a table format.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/to-courses-manager.git
Navigate to the project directory:

bash
Copy
cd to-courses-manager
Install the dependencies:

bash
Copy
npm install
Make the script executable:

bash
Copy
chmod +x index.js
Install the CLI globally (optional):

bash
Copy
npm install -g .
Usage
Add a new course
To add a new course, run the following command:

bash
Copy
to-courses-manger add
You will be prompted to enter the course title and price.

List all courses
To list all courses, run the following command:

bash
Copy
to-courses-manger list
This will display all the courses in a table format.

Example
bash
Copy
$ to-courses-manger add
? Enter course title: Python
? Enter course price: 5000
Course added successfully

$ to-courses-manger list
┌─────────┬──────────┬───────┐
│ (index) │  title   │ price │
├─────────┼──────────┼───────┤
│    0    │ 'JavaScript' │ 4000  │
│    1    │   'C++'   │ 2000  │
│    2    │ 'Node.js' │ 10000 │
│    3    │  'React'  │ 20000 │
│    4    │  'Python' │ 5000  │
└─────────┴──────────┴───────┘
Dependencies
commander: For building the CLI.

inquirer: For interactive command line prompts.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the ISC License. See the LICENSE file for details.

Copy

### Explanation:
- **Features**: Briefly describes what the CLI can do.
- **Installation**: Steps to install the project locally.
- **Usage**: Explains how to use the CLI with examples.
- **Dependencies**: Lists the main dependencies used in the project.
- **Contributing**: Encourages contributions and provides guidelines.
- **License**: Specifies the license under which the project is distributed.

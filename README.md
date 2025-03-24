# TO Courses Manager CLI

## Description

A command-line interface (CLI) tool for managing courses, allowing users to add and list courses easily through the terminal.

## Features

- Add new courses with title and price
- List all existing courses
- Simple and intuitive command-line interface
- Persistent storage using JSON file

## Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd to-courses-manger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Link the CLI globally (optional):
   ```bash
   npm link
   ```

## Usage

### Adding a Course

To add a new course, use the `add` or `a` command:

```bash
to-courses-manger add
```

You'll be prompted to enter:
- Course title
- Course price

### Listing Courses

To view all courses, use the `list` or `l` command:

```bash
to-courses-manger list
```

## Project Structure

- `index.js`: Main CLI application
- `courses.json`: JSON file storing course data
- `package.json`: Project configuration and dependencies

## Dependencies

- [Commander.js](https://github.com/tj/commander.js/): CLI framework
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js): Interactive command-line user interfaces

## Scripts

- `npm start`: Run the application with nodemon for development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the ISC License.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/to-courses-manger](https://github.com/yourusername/to-courses-manger)

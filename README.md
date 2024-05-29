# portfolio Starter

Welcome to the Angular portfolio Starter Project! This project serves as a template to jumpstart your administration panel with a pre-built user system. It's built using Angular and integrates seamlessly with the [Arcane auth](https://github.com/arcane-auth/arcane-auth) system for user authentication and management.

## 📋 Features

demo: [https://portfolio-starter.pages.dev/portfolio](https://portfolio-starter.pages.dev/portfolio)

- Pre-configured Angular environment with essential modules.
- Integrated user authentication using [Arcane auth](https://github.com/arcane-auth/arcane-auth).
- Basic user management functionalities (create, update, delete).
- Responsive admin dashboard layout.

## 🛠️ Installation

Clone and run the Docker container for [Arcane auth](https://github.com/arcane-auth/arcane-auth) project and follow the instructions in the [README](https://github.com/arcane-auth/arcane-auth/blob/main/README.md) file to set up the docker container and start it with `docker-compose up`.

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repository/portfolio-starter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-starter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run start:dev
   ```
   Open http://localhost:4000 to view it in the browser.

## Customization

- To change the texts, you can change the texts in the `src/assets/i18n/` folder.
- To change the logo, you can change the logo in the `src/assets/images/` folder.
- To change the colors, you can change the colors in the `src/app/shared/styles/colors.scss` file.
- To change the features, you can change the features in the `src/app/shared/models` folder.
- To force the theme, you can change the bootstrap theme attribute in the `<html>` tag like this:

```html
<html data-bs-theme="dark">
  or
  <html data-bs-theme="light"></html>
</html>
```

## 🤝 Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## 🛡️ License

this portfolio Starter project is licensed under the MIT License - see the [LICENSE](https://github.com/arcane-auth/arcane-auth/blob/main/LICENSE) file for details.

## 🧑‍💻 Contributing

Feel free to contribute to this project by forking the repository, making improvements, and submitting a pull request!
if need to contact me, you can reach me at [@luisMDev](https://github.com/luisMDev)

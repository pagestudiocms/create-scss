//Copy the scss folder to the root of the prokect when install by NPM
//Copy a starter package.json from helper to the root of project when install by NPM

const fs = require('fs-extra');

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy('scss', '../../../src/scss/vendors/pagestudio-scss-framework', {
      overwrite: false,
      errorOnExist: true,
    });
    console.log(
      '\x1b[32m',
      'Awesome! A new scss folder was added to your project. You are now ready to code something beautiful'
    );
    return true;
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log(
        '\x1b[36m',
        'scss folder already exist. Complementary files were added to it. Happy coding'
      );
      return false;
    }
    throw error;
  }
}

copyFiles();
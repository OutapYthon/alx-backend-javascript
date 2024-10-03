module.exports = {
  // Presets define the set of plugins used to transpile your code
  presets: [
    // Use the '@babel/preset-env' preset for transpiling modern JavaScript features
    [
      '@babel/preset-env',
      {
        // Set the target environment to the current version of Node.js
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

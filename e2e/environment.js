// eslint-disable-next-line @typescript-eslint/no-var-requires
const {DetoxCircusEnvironment} = require("detox/runners/jest");

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config, context) {
    super(config, context);

    // leave your custom code
  }
}

module.exports = CustomDetoxEnvironment;

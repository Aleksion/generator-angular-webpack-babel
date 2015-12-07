


/* @flow */

/**
 *	Example service intended to show how to use services
 *	Flowtype has been enabled for this file to showcase it's use.
 *
 */
export default class SampleService {
  // Define a unique identifier for the SampleService to avoid typo's when including it.
  static UID(): string{
    return "SampleService"
  }

  // With flowtype class variables can be defined with type.
  greeting: string;

  /* @ngInject */
  constructor() {
    /// Service properties are defined in the constructor with this.
    this.greeting = "Welcome to the sample";

    /// with flowtype enabled the following statement will result in an error
    //this.greeting = 2
  }

  /**
   * Example function to demonstrate how to use services
   * With flowtype the return type can be defined.
   * @return {[type]}
   */
  generateGreeting(): string{
    return this.greeting;
  }
}

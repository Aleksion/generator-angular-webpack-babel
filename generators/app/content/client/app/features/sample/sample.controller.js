/**
 * This i a SampleController
 * This file is deliberately not using flowtype, to showcase how
 * an ES6 class is normally assigned
 */
export default class SampleController {

  /**
   * Static getter, that returns the unique identifier of the class. Used for registration with modules.
   */
  static get UID(){
    return "SampleController"
  }

  /* @ngInject */
  constructor(SampleService) {
    // Properties of the class are defined in the constructor with this
    this.greeting = SampleService.generateGreeting();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle-element',
  templateUrl: 'circle.html'
})

export class CircleElement {

  /** Variables Input */
  @Input() product: any;

  /** variables about time ( time to bet ) */
  currentTime: any;
  maxTime : any;
  timeLeftCircleColor : any;

  /** Initialize Variables */
  constructor( ) {

    /** Initialize time countdown */
    this.currentTime = 60;
    this.maxTime = 60;
    this.startTimer();

    /** others */
    this.timeLeftCircleColor = "orange";
  }


    /** Function to Countdown */
    startTimer(){
      setTimeout(x => 
      {
          if( this.currentTime > 0 ) {
            this.currentTime -= 1;
            this.startTimer();
          }

          if(this.currentTime < 25) { 
            this.timeLeftCircleColor = "red"; 
          }

      }, 1000);
    }
    

    /** Bet - Participar no leilão */
    to_bet(){
      
      if(this.currentTime > 0) {
        this.currentTime = 60;
        this.timeLeftCircleColor = "orange";
      }

    }
}
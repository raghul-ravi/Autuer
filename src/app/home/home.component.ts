import { Component, OnInit,AfterViewInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('myawAnime',[
       state('b', style({
            transform: 'translateY(20px)',
             opacity:'0.6',
            
        })),
        state('t', style({
            transform: 'translateY(-20px)',
             opacity:'0.6',
        })),
       
        transition('t <=> b', animate('2500ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
 state: string = 'b';

  ngAfterViewInit() {
    
        this.toggle();
        
       //setTimeout(this.ngAfterViewInit(), 3000);
       //console.log(this.state);
  }
  toggle()
  {
      this.state = (this.state === 'b' ? 't' : 'b');     
      setTimeout(()=>this.toggle(),2000)
  }

 

}

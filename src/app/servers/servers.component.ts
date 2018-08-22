import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server> <app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer:boolean = true;
serverCreationStatus: string = "No server was created!";
serverName : string = 'Testserver';
username : string ='';
serverCreated : boolean = false;
servers = ['Testserver', 'Testserver 2'];
banderaBool:boolean =false;
cont : number = 1;
arregloClicks = [];

  constructor() {
    setTimeout(() =>{
      this.allowNewServer= false;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = ( <HTMLInputElement>event.target).value;
  }
  limpiarUsername(){

    this.username = '';
  }
  metodoLog(){
    this.banderaBool = !this.banderaBool;
   // this.arregloClicks.push(this.cont++);
   this.arregloClicks.push(new Date());
  }
  getColorAzulado(){
    return this.cont > 4 ? 'blue' : 'none';
  }
}

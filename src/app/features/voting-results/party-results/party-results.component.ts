import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PartyResultsService } from 'src/app/core/services/party-results.service';

@Component({
  selector: 'app-party-results',
  templateUrl: './party-results.component.html',
  styleUrls: ['./party-results.component.scss']
})
export class PartyResultsComponent implements OnInit {

  $party : Observable<any>;
  constructor(private partyresults : PartyResultsService) {
    this.$party= this.partyresults.getPartyResults(); 
   }

  ngOnInit(): void {    
  }

}

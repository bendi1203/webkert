import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Rekord } from 'src/app/shared/models/rekord.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  rekordId: string | null = '';
  rekord: Rekord | null = null;
  @Output() callSelectPage = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private service:FbBaseService ) { 
    const routeParameters = this.route.snapshot.paramMap;
    this.rekordId = routeParameters.get('rekordId');
  }

  ngOnInit(): void {
    if(this.rekordId != null){
      var rekordObservable: Observable<Rekord> = this.service.getById('rekords', this.rekordId);
      rekordObservable.subscribe((result: Rekord) => {
        this.rekord = result;
      });
    }
  }

  delete(): void{
    if(this.rekordId != null){
      this.service.delete('rekords' ,this.rekordId);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moreabout',
  templateUrl: './moreabout.component.html',
  styleUrls: ['./moreabout.component.scss']
})
export class MoreaboutComponent implements OnInit {
  userId: number;
  userName: string;
  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    // this.activeRouter.paramMap.subscribe((param) => {
    //   this.userId = parseInt(param.has('id') === true ? param.get('id') : '');
    //   this.userName = param.has('name') === true ? param.get('name') : '';

    // })
  }

  backToHome() {
    this.router.navigate(['/aboutus'], { relativeTo: this.activeRouter });
  }

}

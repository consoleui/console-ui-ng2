import { Component, OnInit } from '@angular/core';

import { CmsConfig, CMS_CONFIG } from './cms.config';

@Component({
  selector: 'cms-root',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
  cmsConfig: CmsConfig = CMS_CONFIG;

  constructor() { }

  ngOnInit() {
  }

}

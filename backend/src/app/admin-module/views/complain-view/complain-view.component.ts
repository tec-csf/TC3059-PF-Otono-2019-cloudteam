import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app-modules/app-services-module';
import { Router, ActivatedRoute } from '@angular/router';

import { ElementView } from '../../../app-modules/form-module';

import { COMPLAIN_QUESTIONS, PARTIAL_COMPLAIN_QUESTIONS } from './complain-questions';
import { ComplainsService } from '../../services/complains.service';

@Component({
  selector: 'app-complain-view',
  templateUrl: './complain-view.component.html',
  styleUrls: ['./complain-view.component.scss']
})
export class ComplainViewComponent extends ElementView implements OnInit {
  statusMap = { active: 'Activo', inactive: 'Desactivado' };

  constructor(
    protected appService: AppService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected spaceGroupsService: ComplainsService,
  ) {
    super(
      appService, router, activatedRoute,
      {
        elementQuestions: COMPLAIN_QUESTIONS,
        partialElementQuestions: PARTIAL_COMPLAIN_QUESTIONS,
        elementBackRoute: 'quejas',
        elementNewRoute: 'queja',

        elementPostServiceFn: spaceGroupsService.createComplain,
        elementGetServiceFn: spaceGroupsService.getComplain,
        elementUpdateServiceFn: spaceGroupsService.updateComplain,
        elementDeleteServiceFn: spaceGroupsService.deleteComplain,
      }
    );
  }
  ngOnInit() {
  }

}

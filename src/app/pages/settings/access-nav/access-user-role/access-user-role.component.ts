import { Component } from '@angular/core';
import { AccessService } from 'src/app/core/services/access.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs';



@Component({
  selector: 'app-access-user-role',
  templateUrl: './access-user-role.component.html',
  styleUrls: ['./access-user-role.component.scss']
})
export class AccessUserRoleComponent {

  RolesList: any = [];
  form: FormGroup;
  showHi: boolean = false;



  constructor(private AccessService: AccessService,
    private fb: FormBuilder){
      this.form = this.fb.group({

        name: '',
        description: '',
        dashboard_view: false,
        created_at: false,
  
        cms_about_add: false,
        cms_about_modify: false,
        cms_about_publish: false,
        cms_about_view: false,
  
        cms_activities_add: false,
        cms_activities_modify: false,
        cms_activities_publish: false,
        cms_activities_view: false,
  
        cms_city_add: false,
        cms_city_modify: false,
        cms_city_publish: false,
        cms_city_view: false,
  
        cms_faq_add: false,
        cms_faq_modify: false,
        cms_faq_publish: false,
        cms_faq_view: false,
  
        cms_instructions_add: false,
        cms_instructions_modify: false,
        cms_instructions_publish: false,
        cms_instructions_view: false,
  
        cms_reviews_add: false,
        cms_reviews_modify: false,
        cms_reviews_publish: false,
        cms_reviews_view: false,
  
  
        settings_access_management_add: false,
        settings_access_management_modify: false,
        settings_access_management_view: false,
  
        settings_integrations_add: false,
        settings_integrations_modify: false,
        settings_integrations_view: false,
  
        settings_templates_add: false,
        settings_templates_modify: false,
        settings_templates_view: false
  
  
      });
    }

  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');
    this.getRolesList();

  }

  getRolesList() {
    this.AccessService.get_roles().subscribe(data => {
      this.RolesList = data;
    });
  }


  showHiContent(){
    this.showHi = true;
    console.log("hi",this.RolesList)

  }

  setValue(data) {
    this.showHi = true;
    // console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    this.form = this.fb.group({
      name: data.name,
      description: data.description,
      dashboard_view: data.dashboard_view,

      cms_city_add: data.cms_city_add,
      cms_city_modify: data.cms_city_modify,
      cms_city_publish: data.cms_city_publish,
      cms_city_view: data.cms_city_view,

      cms_about_add: data.cms_about_add,
      cms_about_modify: data.cms_about_modify,
      cms_about_publish: data.cms_about_publish,
      cms_about_view: data.cms_about_publish,

      cms_activities_add: data.cms_activities_add,
      cms_activities_modify: data.cms_activities_modify,
      cms_activities_publish: data.cms_activities_publish,
      cms_activities_view: data.cms_activities_view,

      cms_faq_add: data.cms_faq_add,
      cms_faq_modify: data.cms_faq_modify,
      cms_faq_publish: data.cms_faq_publish,
      cms_faq_view: data.cms_faq_view,

      cms_instructions_add: data.cms_instructions_add,
      cms_instructions_modify: data.cms_instructions_add,
      cms_instructions_publish: data.cms_instructions_publish,
      cms_instructions_view: data.cms_instructions_view,

      cms_reviews_add: data.cms_reviews_add,
      cms_reviews_modify: data.cms_reviews_modify,
      cms_reviews_publish: data.cms_reviews_publish,
      cms_reviews_view: data.cms_reviews_view,

      settings_access_management_add: data.settings_access_management_add,
      settings_access_management_modify: data.ettings_access_management_modify,
      settings_access_management_view: data.settings_access_management_view,

      settings_integrations_add: data.settings_integrations_add,
      settings_integrations_modify: data.settings_integrations_modify,
      settings_integrations_view: data.settings_integrations_view,

      settings_templates_add: data.settings_templates_add,
      settings_templates_modify: data.ettings_templates_modify,
      settings_templates_view: data.settings_templates_view


    });
  }


 

}

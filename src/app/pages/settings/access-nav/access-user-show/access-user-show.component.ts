import { Component } from '@angular/core';
import { AccessService } from 'src/app/core/services/access.service';
import { DropdownOption } from 'src/app/core/services/contacts.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';


@Component({
  selector: 'app-access-user-show',
  templateUrl: './access-user-show.component.html',
  styleUrls: ['./access-user-show.component.scss']
})
export class AccessUserShowComponent {
  isChecked: boolean = true;
  UserList: any = [];
  RolesList: any = [];
  actionList: any = [];
  constructor(private modalService: NgbModal,
    private AccessService: AccessService,
    private authenticationService: AuthenticationService,
    private authfackservice: AuthfakeauthenticationService,
    private http: HttpClient,
    private ngWizardService: NgWizardService) { }

  modalRef: any;
  ModalTitle: any;
  user: any;
  ActivateAccessUserOperationsComp: boolean = false;
  description: any;

  ngOnInit() {
    this.refreshUserList()
    this.getRolesList();
    console.log("zero", this.UserList)
  }

  refreshUserList() {
    this.AccessService.get_user_List().subscribe(data => {
      this.UserList = data;
      console.log("one", this.UserList)
    });
  }

  
  getRolesList() {
    this.AccessService.get_roles().subscribe(data => {

      this.RolesList = data;
      console.log("hi", this.RolesList)

    });
  }

  onCheckboxChange(user: any) {
  
    // Include the 'user' object as a whole in the API call
    this.AccessService.get_action(user).subscribe(
      (response) => {
        console.log('User activation status updated:', response);
      },
      (error) => {
        console.error('Error updating user activation status:', error);
        // You can roll back the 'active' status in case of an error
        user.active = !user.active;
      }
    );
  }
  


// getAction() {
//   this.AccessService.get_action().subscribe(data => {

//     this.UserList = data;
//     console.log("action", this.UserList)

//   });
// }

transform(roleId: number): string {
  const role = this.RolesList.find(item => item.id === roleId);
  return role ? role.name : 'Unknown Role';
}

/**
   * Open modal
   * @param largeDataModal modal content
   */
ModalOpen(largeDataModal: any) {
  this.modalService.open(largeDataModal, { size: 'lg', windowClass: 'modal-holder', centered: true });
  this.user = null;
  this.ModalTitle = "Add User";
  this.ActivateAccessUserOperationsComp = true;
}


editClick(largeDataModal, item: any) {
  this.modalService.open(largeDataModal, { size: 'lg', windowClass: 'modal-holder', centered: true });

  console.log('edit works')
  this.user = item;
  this.ModalTitle = "Edit Contact";
  this.ActivateAccessUserOperationsComp = true;
}
}


import { Component } from '@angular/core';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropdownOption } from 'src/app/core/services/contacts.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent {
  constructor(private modalService: NgbModal, private contactsService: ContactsService,private authenticationService: AuthenticationService,private authfackservice: AuthfakeauthenticationService,private http: HttpClient) { }

  contacts: any[] = [];
 
  ModalTitle: any;
  con: any;
  // ActivateContactsOperationsComp: boolean = false;
  ContactList: any = [];
 

  modalRef: any;
  token: string;


  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');
    // Fetch data for the dropdown when the component initializes
 
    // this.refreshContactList();
   
  }

  // refreshContactList() {
  //   this.contactsService.getContactList().subscribe(data => {
  //     this.ContactList = data;
  //   });
  // }

  

  // Use the defined type

  // Fetch data for the dropdown


  // addContact() {
  //   // Implement logic to add a new contact to the 'contacts' array
  //   // You can add the contact object with attributes based on the selected data types
  // }

  /**
   * Open center modal
   * @param addContactModal center modal data
   */
 

  addcontact(addContactModal2: any) {
    this.modalRef = this.modalService.open(addContactModal2, { centered: true, windowClass: 'modal-holder' });
    this.con = {
      FirstName: "",
      LastName: "",
      number: "",
      Email: ""
    }
    this.ModalTitle = "Add contact";
    // this.ActivateContactsOperationsComp = true;
  }

  editClick(item: any) {
    this.con = item;
    this.ModalTitle = "Edit Contact";
    // this.ActivateContactsOperationsComp = true;
  }

  deletClick(item: any) {

  }

  closeContactModal() {
    setTimeout(() => {
      this.modalRef.close();
    }, 1000);
  }
}

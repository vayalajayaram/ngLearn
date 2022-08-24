import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  fressness = ["New","Refurbished","Used"];
  productForm !: FormGroup;
  actionbtn : string = 'ADD';
  constructor(
    private formBuilder: FormBuilder, 
    private api: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required]
    })

    if(this.editData){
      this.actionbtn = 'Update';
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['description'].setValue(this.editData.description);
      this.productForm.controls['date'].setValue(this.editData.date);
    }
  }
 
  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value)
        .subscribe({
          next:(res)=>{
            alert("Product added successfully..!");
            this.productForm.reset();
            this.dialogRef.close('Save');
          },
          error:()=>{
            alert("Error while adding the product");
          }
        })
      }
    }else{
      this.updateProduct();
    }
  }
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated successfully..!");
        this.productForm.reset();
        this.dialogRef.close('Update');
      },
      error:()=>{
        alert("Error while updating the product");
      }
    })
  }
}

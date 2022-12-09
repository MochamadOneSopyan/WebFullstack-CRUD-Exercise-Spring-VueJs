<template>
  <div>
    <!-- <div class="ml-4">
       <button type="submit" class="btn btn-primary mt-3 mb-5 ">Back</button>  -->
      <!-- <router-link to="/" class="btn btn-primary mt-3 mb-5">Back</router-link>
    </div> -->
    <form @submit.prevent="inputStudent" v-show="!success">
      <div
        class="border border-primary p-5 mt-5 mb-5 rounded"
        id="ship"
        style="width: fit-content; margin: auto"
      >
        <h3 class="text-center mb-5">Add Student</h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Student Name</label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter name"
              v-model="studentData.nama"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Soft Skill</label>
            <input
              type="text"
              class="form-control"
              id="inputPassword4"
              placeholder="Enter soft skills"
              v-model="studentData.soft_skill"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="inputState">Student Age</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Enter age"
              v-model="studentData.umur"
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputZip">Gender</label>
            <select
              id="inputState"
              class="form-control"
              v-model="studentData.jenis_kelamin"
            >
              <option selected></option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputCity">Hard Skills</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Enter hard skills"
              v-model="studentData.hard_skill"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6"></div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Student Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder=" Enter email"
              v-model="studentData.email"
            />
            <br />
            <label for="adress">Self Description</label>
            <textarea
              inputmode=""
              style="width: 205%; height: 40%; overflow: auto"
              placeholder=""
              v-model="studentData.deskripsi_diri"
              required
            ></textarea>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Interest</label>
            <select id="inputState" class="form-control" v-model="studentData.interest">
              <option selected></option>
              <option>Data Science</option>
              <option>Network</option>
              <option>Web Frontend</option>
              <option>Web Backend</option>
              <option>Mobile Apps</option>
            </select>
          </div>
        </div>
        <!-- <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div> -->
        <br>
        <button type="submit" class="btn btn-primary">{{ buttonValue }}</button>
      </div>
    </form>
    <SuccessForm v-show="success"></SuccessForm>
  </div>
</template>

<script>
import studentService from "../services/studentService.js";
import SuccessForm from './SuccessForm.vue'
export default {
  methods: {
        inputStudent() {
            let data = this.studentData;
            let id = this.$route.params.id;
            let route = this.$route.fullPath;
            if (route === "/add") {
                studentService.create(data)
                    .then((response) => {
                        console.log(response.data);
                        this.success = true;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                studentService.updateStudent(id, data)
                    .then((response) => {
                        console.log(response.data);
                        this.success = true;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        },
        updateGetId() {
            let id = this.$route.params.id;
            if (id > 0) {
                this.buttonValue = "Update";
            }
            studentService.updateGetId(id)
                .then((response) => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        if ((this.$route.params.id > 0)) {
            this.updateGetId();
        }
    },
  
  name: "FormComponents",
  data() {
    return {
      studentData: {
        deskripsi_diri: null,
        email: null,
        hard_skill: null,
        interest: null,
        jenis_kelamin: null,
        nama: null,
        soft_skill: null,
        umur: null,

      },
      success: false,
      buttonValue: "Submit",
    };
  },



components : {
    SuccessForm,
    
},
props: ["studentDataProps"],
watch: {
    'studentDataProps'(newValue) {
        this.studentData = newValue;
        console.log(this.studentData);
        this.buttonValue = "Update"
    }
}
};
</script>

<style></style>

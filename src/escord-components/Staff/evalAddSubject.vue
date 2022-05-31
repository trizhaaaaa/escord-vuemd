<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container"  v-click-outside="closeModal">

          <div class="modal-header">
            <h3 class="title text-esc-accent">Add Subject</h3>
          </div>

          <div class="modal-body text-center">
              <form @submit.prevent="addEvalStud" novalidate>
                <!-- form-control  -->

                <div class="md-layout-item md-size-100 md-layout md-gutter">
                    <div class="md-layout-item">
                        <md-autocomplete
                        :class="getValidationClass('selectedSubject')"
                        :disabled="sending"
                        class="has-esc-accent"
                        v-model="formData.selectedSubject"
                        :md-options="subjOptions"
                        :md-fuzzy-search="false"
                        @md-changed="getSubjectOptions"
                        @md-opened="getSubjectOptions"
                        @md-selected="getSelectedSubject">
                            <label>Subject Description</label>

                            <span class="md-error" v-if="!$v.formData.selectedSubject.required">Field is required.</span>
                        </md-autocomplete>
                    </div>
                </div>

                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
                    <div class="md-layout-item md-size-30 md-xsmall-size-100 md-layout md-gutter">
                        <md-field
                        :class="getValidationClass('selectedSubjCode')"
                        class="has-esc-accent">
                            <label>Code</label>
                            <md-input
                            :disabled="sending"
                            v-model="formData.selectedSubjCode"></md-input>

                            <span class="md-error" v-if="!$v.formData.selectedSubjCode.required">Field is required.</span>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-30 md-xsmall-size-100 md-layout md-gutter">
                        <md-field
                        :class="getValidationClass('selectedSubjUnit')"
                        class="has-esc-accent">
                            <label>Units</label>
                            <md-input
                            type="number"
                            :disabled="sending"
                            v-model="formData.selectedSubjUnit"></md-input>

                            <span class="md-error" v-if="!$v.formData.selectedSubjUnit.required">Field is required.</span>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-35 md-xsmall-size-100 md-layout md-gutter">
                        <md-field
                        :class="getValidationClass('subjFG')"
                        class="has-esc-accent">
                            <label>Grade</label>
                            <md-input
                            type="number"
                            :disabled="sending"
                            v-model="formData.subjFG"></md-input>

                            <span class="md-error" v-if="!$v.formData.subjFG.required">Field is required.</span>
                            <span class="md-error" v-if="!$v.formData.subjFG.minValue">Accepts from `1.00`.</span>
                            <span class="md-error" v-if="!$v.formData.subjFG.maxValue">Accepts up to `5.00`.</span>
                        </md-field>

                    </div>
                </div>
                

                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button 
                    type="submit" 
                    class="__modal-buttons md-esc-accent md-round md-dense" 
                    :disabled="sending">
                        ADD
                    </md-button>
                </div>
              </form>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>

//validation imports
import { validationMixin } from 'vuelidate'
import { required, maxValue, minValue  } from 'vuelidate/lib/validators'
import { mapActions, mapGetters} from "vuex";


export default {
  name: "modal",
  mixins: [validationMixin],// for validation
  
  mounted(){
            this.$store.dispatch('getScholasticRecord',this.$route.params.studnum);
         
    },
  
  data() {
      return {

        formData: {
        selectedSubject: '',
        selectedSubjCode: '',
        selectedSubjUnit: '',
        subjFG: null,
        srms_id:this.$route.params.studnum
        },
          sending: false,

        subjectList: [
            {
                code: "GEC 001",
                desc: "MATHEMATICS IN THE MODERN WORLD",
                unit: 3
            },
            {
                code: "GEC 003",
                desc: "ORAL COMMUNICATION",
                unit: 3
            },
            {
                code: "CCS 111",
                desc: "READING AND WRITING",
                unit: 5
            },
            {
                code: "GEF 005",
                desc: "FILIPINO SA IBA'T IBANG DISIPLINA",
                unit: 2
            }
        ], 
        subjOptions: [],
      };
  },
  validations: {
    formData:{
     selectedSubject: {
        required
        },
    selectedSubjCode: {
            required
        },
    selectedSubjUnit: {
            required
        },
    subjFG: {
            required,
            minValue: minValue(1.00),
            maxValue: maxValue(5.00)
        }
        }
  },
  computed:{
  ...mapGetters({getScholRecord: 'getScholRecord'}),

  },
  methods: {
          ...mapActions({ addStudEvaluation: "addStudEvaluation" }),

    closeModal: function() {
      this.$emit("close");
    },

    getValidationClass (fieldName) {
      const field = this.$v.formData[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },

    addEvalStud() {
            
           
            this.$v.$touch()

        
            
            this.addStudEvaluation(this.formData)
     
            if (!this.$v.$$eachinvalid) {

            
              this.sending = true 
            }
             
    },

    /* SELECT SUBJECT */
    getSubjectOptions(searchTerm) {
        // console.log("getCustomers", searchTerm);
        
        this.subjOptions = new Promise ((resolve) => {
            if (!searchTerm) {
                resolve(this.subjectList.map((x) => x.desc));
            }
            else {
                const term = searchTerm.toUpperCase();
                this.subjOptions =  this.subjectList
                    .filter(({desc}) => {
                        return desc.toUpperCase().includes(term);
                    })
                    .map((x) => x.desc);
                    resolve(this.subjOptions);
            }
        });
  },

    getSelectedSubject() {
      const selectedSubjDetail =  this.subjectList.find(
          (obj) => obj.desc === this.formData.selectedSubject
      );

      this.formData.selectedSubjUnit = selectedSubjDetail.unit
      this.formData.selectedSubjCode = selectedSubjDetail.code
     }

  },
};
</script>

<style lang="scss" scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-container {
  margin-top: 0em !important;
  max-width: 25em !important;
}

h3, .h3 {
  font-size: 1.5em !important;
  line-height: 1em !important;
  margin-bottom: 0px !important;
}

.md-field {
    margin-bottom: 1em !important;
}

.md-error {
  position: absolute !important;
  top: 3.07em !important;
  left: 0 !important;
  line-height: 0.95em !important;
  text-align: left;
  font-size: .777rem !important;
}

.md-input {
  max-width: 100%;
}

.__modal-buttons {
  margin-top: 1em;
}
</style>

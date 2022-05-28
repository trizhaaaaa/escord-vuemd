<template>
  <div class="">

    <div class="__wrap md-layout md-gutter"> 

       <md-subheader>USERS</md-subheader> 

      <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

          <md-card
          class="md-layout-item md-size-30 md-xsmall-size-100"
          v-for="cardInfo in overviewCards" :key="cardInfo.category">

            <md-card-content>
                <div class="md-layout md-gutter md-alignment-center-space-between">

                    <div class="md-layout-item md-size-50 md-small-size-100 md-layout md-gutter md-alignment-center-center">
                        <h3 class="title">{{cardInfo.category}}</h3>
                    </div>

                    <div class="md-layout-item md-size-50 md-small-size-100 md-layout">
                        <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                            <h3 class="__total" v-if="cardInfo.total==0">{{totalStudents}}</h3>

                            <h3 class="__total" v-else>{{cardInfo.total}}</h3>
                        </div>

                        <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                            <p class="md-caption">TOTAL</p>
                        </div>
                    </div>
 
                </div>
            </md-card-content>
          </md-card>
        </div>

        <md-subheader>STUDENTS</md-subheader>

        <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

          <md-card
          class="md-layout-item md-size-20 md-xsmall-size-45"
          v-for="studentInfo in studentCards" :key="studentInfo.program">

            <md-card-content>
                <div class="md-layout md-gutter md-alignment-center-space-between">

                    <div class="md-layout-item md-size-50 md-small-size-100 md-layout md-gutter md-alignment-center-center">
                        <h3 class="title">{{studentInfo.program}}</h3>
                    </div>

                    <div class="md-layout-item md-size-50 md-small-size-100 md-layout">
                        <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                            <h3 class="__total">{{studentInfo.total}}</h3>
                        </div>

                        <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                            <p class="md-caption">TOTAL</p>
                        </div>
                    </div>
 
                </div>
            </md-card-content>
          </md-card>
        </div>

    </div>
      
  </div>
</template>

<script>

import axios from 'axios'
export default {
    
    mounted(){
            this.countNumberofAccounts()
            this.countNumberofStudents()
    },
    data() {
        return {
            overviewCards: [
                {
                    category: "Student",
                    total: 0
                },
                {
                    category: "Professor",
                    total: 0
                },
                {
                    category: "Staff",
                    total: 0
                }
            ],

            studentCards: [
                {
                    program: "BSCS",
                    total: 0
                },
                {
                    program: "BSIS",
                    total: 0
                },
                {
                    program: "BSIT",
                    total: 0
                },
                {
                    program: "BSEMC",
                    total: 0
                }
            ]
        }
    },

    computed: {
        totalStudents() {
            return this.studentCards.reduce((acc, item) => acc + item.total, 0);
        }
    },

    methods:{


        async countNumberofAccounts(){
 
           await    axios.get('/api/countProf').then(({data})=>{
            
                   this.overviewCards[0].total = data.stud
                   this.overviewCards[1].total = data.prof
                   this.overviewCards[2].total = data.staff


               //    console.log(this.overviewCards[0].total)

                
                }).catch(({ response })=>{
                    console.error(response)
                })
           
},


  async countNumberofStudents(){
           
 
           await    axios.get('/api/countStudent').then(({data})=>{
            
                

                   this.studentCards[0].total = data.bscs
                   this.studentCards[1].total = data.bsis
                   this.studentCards[2].total = data.bsit
                   this.studentCards[3].total = data.bsemc


               //    console.log(this.overviewCards[0].total)

                
                }).catch(({ response })=>{
                    console.error(response)
                })
           
},

    }

}


</script>

<style>
.__wrap {
    padding: 2em !important;
}

.title {
    margin-bottom: 0 !important;
}

.__total {
    margin: 0.25em 0 !important;
    font-size: 3em;
}
</style>
<template>
    <div class="gradesheet-page">

        <!-- TOP MENU BUTTONS -->
        <div class="top-menu">
            <div class="btn-return">
                <input type="button" value="Return to Main Menu">
            </div>
            
            <div class="btn-grp">

                <button type="button" class="addStud">
                     <i class="fa-solid fa-user-plus" title="Add Student to Gradesheet"></i>
                </button>

                <button type="button">
                     <i class="fa-solid fa-floppy-disk" title="Update Gradesheet"></i>
                </button>

                <button type="button" title="Archive Gradesheet">
                     <i class="fa-solid fa-box-archive"></i>
                </button>

                <button type="button" title="Preview and Download Gradesheet">
                     <i class="fa-solid fa-download"></i>
                </button>

            </div>
        </div>

        <!-- GRADESHEET INFO -->
        <div class="gradesheet-info">
            <div class="subj">
                <p class="subjInfo subjCode">  {{subjCode}}  </p>
                <p class="subjInfo">  {{subjDesc}}  </p>
            </div>

            <div class="class">
                <p class="classInfo profName">  {{profName}} </p>
                
                <div class="sched">
                    <p class="classInfo">  {{schedTime}} </p> 
                    <b> | </b>
                     <p class="classInfo">  {{schedDay}} </p>
                </div>
            </div>
        </div>

        <div class="gradesheet">
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th colspan="3">NAME</Th>
                        <Th>MIDTERM</Th>
                        <Th>FINAL TERM</Th>
                        <Th>REMARKS</Th>
                    </Tr>
                </Thead>

                <Tr v-for="student in tableContents" :key="student.studNum">

                    <Td class="studNum">{{student.studNum}}</Td>
                    <Td class="first name">{{student.studLN}}, </Td>
                    <Td class="mid name">{{student.studFN}}</Td>
                    <Td class="name">{{student.studMN}}</Td>

                    <Td>
                        <input type="text" class="grade" v-bind:value="student.studMTG" maxlength="4" size="7" required>
                    </Td>

                    <Td>
                        <input type="text" class="grade" v-bind:value="student.studFTG" maxlength="4" size="7" required>
                    </Td>

                    <Td>
                        <input type="text" v-bind:value="student.studRMRK">
                    </Td>
                    

                </Tr>
            </Table>
        </div>


    </div>
</template>

<script>
export default {
    data(){
        return{
            subjCode: 'GEC 006',
            subjDesc: 'PHILIPPINE HISTORY',
            profName: 'JUAN DELA CRUZ',
            schedTime: '10:00-1:00/ 3:00-5:00',
            schedDay: 'MONDAY/ SATURDAY',

            tableContents: [
                {
                    studNum: '0001',
                    studLN: 'DELA CRUZ',
                    studFN: 'JUAN',
                    studMN: 'L',
                    
                    studMTG: '0',
                    studFTG: '0',
                    studRMRK: '',
                },

                {
                    studNum: '0002',
                    studLN: 'DELA CRUZ',
                    studFN: 'JUAN',
                    studMN: 'G',
                    
                    studMTG: '0',
                    studFTG: '0',
                    studRMRK: '',
                },

                {
                    studNum: '0003',
                    studLN: 'DELA CRUZ',
                    studFN: 'JUAN',
                    studMN: 'S',
                    
                    studMTG: '0',
                    studFTG: '0',
                    studRMRK: '',
                }
            ]
        }
    }
}
</script>

<style>

/* TOP MENU BUTTONS */
.gradesheet-page{
    margin: 0 1rem 1rem 1rem;
}

.top-menu, .gradesheet-info, .gradesheet{
    margin: 1rem;
}

.top-menu, .subj, .class, .sched{
    display: flex;
}

.top-menu input[type=button]{ 
    padding: 0.75rem;
}

.top-menu input[type=button], .top-menu button{
    border-radius: 0.5rem;
}

.btn-return{
    margin: 0 0.5rem 0 0;
}

.btn-return input[type=button]{
    background: #ff9807;
    letter-spacing: 0.01rem;
}

.btn-return input:hover{
    box-shadow: 2px 2px 5px 1px #ccccccaa;
    }

.btn-grp{
    margin: 0 0 0 0.5rem;
    position: fixed;
    right: 2rem;

}

.btn-grp button{
    margin: 0 0.25rem;
    padding: 0.75rem;
    color: #545454;
    background: #ff9807aa;
}

.btn-grp button:hover{
    box-shadow: 2px 2px 5px 1px #ccccccaa;
    color: #ff9807;
    background: #545454;
    transition: 0.3s;
}

.btn-grp button.addStud{
    background: #a3ff7e6e;
}

.btn-grp button.addStud:hover{
    color: #a3ff7ee1;
    background: #545454;
}

i{
    font-size: 1.25rem;
    width: 1.5rem;
}

/* GRADESHEET INFO */

.subj{
    font-family: "Cuprum", sans-serif;
    font-size: 1.5rem;
    margin: 2rem 0 0.75rem 0;
}

.subjCode, .profName{
    margin: 0 1rem 0 0;
}

.profName{
    font-size: 1.05rem;
}
.sched{
    letter-spacing: 0.05rem;
}

/* GRADESHEET */

.gradesheet{
    width: 100%;
    border-top: 2px solid #777777aa;
    padding: 1.25rem;
}

table{
    border-collapse: collapse;
    text-align: center;
}

tr td{
    padding: 0.5rem 0.5rem 0 0.25rem;
}

tr td:not(.first, .mid){
    padding-right: 1rem;
}

td input{
    text-align: justify;
    outline: none;
    border-bottom: 1px solid #7777777a;
}

td input:focus{
    border-bottom: 1px solid #777777;
}

.grade{
    text-align: center;
}

</style>
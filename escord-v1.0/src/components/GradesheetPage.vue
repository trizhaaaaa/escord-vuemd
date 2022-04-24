<template>
    <div class="gradesheet-page">

        <!-- TOP MENU BUTTONS -->
        <div class="top-menu">
            <div class="btn-return">
                <input type="button" value="Return to Main Menu">
            </div>
            
            <div class="btn-grp">
                <input type="button" value="Add">
                <input type="button" value="Save">
                <input type="button" value="Archive">
                <input type="button" value="Download">
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

                <Tr v-for="student in tableContents" :key="student">

                    <Td class="studNum">{{student.studNum}}</Td>
                    <Td class="first name">{{student.studLN}}, </Td>
                    <Td class="mid name">{{student.studFN}}</Td>
                    <Td class="name">{{student.studMN}}</Td>

                    <Td v-html="student.studMidterm" class="midterm"></Td>
                    <Td v-html="student.studFinalTerm" class="finalterm"></Td>
                    <Td v-html="student.studRemarks" class="remarks"></Td>

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

                    studMidterm:'<input type="text" placeholder="0" class="grade"></input>',

                    studFinalTerm: '<input type="text" placeholder="0" class="grade"></input>',

                    studRemarks:'<input type="text"></input>'
                },

                {
                    studNum: '0002',
                    studLN: 'DELA CRUZ',
                    studFN: 'JUAN',
                    studMN: 'G',

                    studMidterm:'<input type="text" placeholder="0" class="grade"></input>',

                    studFinalTerm: '<input type="text" placeholder="0" class="grade"></input>',
                    
                    studRemarks:'<input type="text"></input>'
                },

                {
                    studNum: '0003',
                    studLN: 'DELA CRUZ',
                    studFN: 'JUAN',
                    studMN: 'S',
                    
                   studMidterm:'<input type="text" placeholder="0" class="grade"></input>',

                    studFinalTerm: '<input type="text" placeholder="0" class="grade"></input>',
                    
                    studRemarks:'<input type="text"></input>'
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
    padding: 0.5rem;
}

.btn-return{
    margin: 0 0.5rem 0 0;
}

.btn-return input[type=button]{
    background: #ff9807;
}

.btn-grp{
    margin: 0 0 0 0.5rem;
    position: fixed;
    right: 2rem;

}

.btn-grp input[type=button]{
    background: #ff9807aa;
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
    padding-right: 0.75rem;
}

td input{
    text-align: center;
    outline: none;
    border-bottom: 1px solid #777777aa;
}

.grade{
    width: 20%;
}




</style>
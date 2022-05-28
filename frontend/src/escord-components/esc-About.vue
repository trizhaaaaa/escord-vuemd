<template>
  <div class="wrapper">
    <div class="section header-filter"> 
      <!-- removed .page-header from div above remove top alignment??? kapag sobrang haba ng content, sumasagad sa dulo -->
      <div class="container">
        <div class="__feature-list">
            <h3 class="md-display-2">_features</h3>
            <div class="__feature-cards md-layout md-gutter md-alignment-top-center">
              <md-card
              md-with-hover
              class="md-layout-item md-size-45 md-xsmall-size-80 md-small-size-45" 
              v-for="feature in features" 
              :key="feature.name">
                <md-content>
                  <h4 class="text-center md-headline">{{feature.name}}</h4>

                  <span v-if="isShown === feature.showID">
                    <div class="__feature-detail mx-auto">
                      <p class="__shortDesc md-subheading">
                      {{feature.shortDesc}}
                      </p>

                      <h5 class="text-right">
                        {{feature.longDescTitle}}
                      </h5>

                      <p class="md-body-1">
                        {{feature.longDesc}}
                      </p>
                    </div>
                  </span>
                </md-content>
                <md-card-actions>
                  <md-button
                  class="md-simple mx-auto"
                  @click="showMore(feature.showID)">
                    <p class="__btn-p" v-if="isShown === feature.showID">Show Less</p>
                    <p class="__btn-p" v-else>Show More</p>
                  </md-button>
                </md-card-actions>
              </md-card>
            </div>
        </div>

        <div class="__team-list">
          <h3 class="md-display-2">_team</h3>
          <div class="md-layout md-gutter md-alignment-top-center">
            <div 
            class="__team-member md-layout-item md-size-15
            md-xsmall-size-35
            md-small-size-25"
            v-for="member in team"
            :key="member.name">

              <img :src="member.pic"
              class="img-raised img-thumbnail">

              <div class="__member_desc">
                <p class="text-center md-body-2">
                {{member.name}}
                </p>
                <p class="text-center md-caption">
                  {{member.position}}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-headful title="About | ESCORD"/>
  </div>
</template>

<script>

export default {
  bodyClass: "escord-about-page",
  data() {
    return {
        team: [
        {
          pic: require("@/assets/img/escord-team-pictures/stud.png"),
          name: "TRIZHALYN L. MAGLANGIT",
          position: "Software Engineer",
        },

        {
          pic: require("@/assets/img/escord-team-pictures/porral.png"),
          name: "JACQUELINE C. PORRAL",
          position: "Associate Software Engineer",
        },

        {
          pic: require("@/assets/img/escord-team-pictures/ba-alan.jpg"),
          name: "NIKKI E. BA-ALAN",
          position: "Research Manager",
        },

        {
          pic: require("@/assets/img/escord-team-pictures/jolo.jpg"),
          name: "JERECHO L. JOLO",
          position: "Programmer",
        },

        {
          pic: require("@/assets/img/escord-team-pictures/walohan.jpg"),
          name: "JAYMAR M. WALOHAN",
          position: "Programmer",
        },

        {
          pic: require("@/assets/img/escord-team-pictures/bulaclac.jpg"),
          name: "JOHN PHILIP N. BULACLAC",
          position: "Graphic Designer",
        },

        {
          pic: require("@/assets/img/escord-team-pictures/canino.jpg"),
          name: "ZHYREX L. CANINO",
          position: "Graphic Designer",
        },
      ],

      features: [
        {
          icon: "",
          name: "INTEROPERABLE",
          shortDesc:
            "Avoids the redundant process of creating and account an filling out forms by intergrating the UCC-EMS.",
          longDescTitle: "IN COLLABORATION WITH UCC-EMS",
          longDesc:
            "ESCORD fetches account credentials, student information, as well as necessary details to fill out grading sheet, scholastic records, and summary of grades forms from the UCC-Enrollment Management System.",
          showID: "1"
        },

        {
          icon: "",
          name: "UNIFORM LAYOUT",
          shortDesc:
            "ESCORD boasts a straightforward UI design that allows for catering a wider range of user.",
          longDescTitle: "CONSISTENT AND SYSTEMATIC DESIGN",
          longDesc:
            "It is uniformly built so that to maintain the user's familiarity with navigating through and using the system even with the account restriction changes taking place.",
          showID: "2"
        },

        {
          icon: "",
          name: "ELIMINATES INACCURACY",
          shortDesc:
            "ESCORD's main objecive is to produce as much as accurately computed results reflected in a student's scholastic record and evaluation form as possible.",
          longDescTitle: "A TEAM OF PROFESSIONALS",
          longDesc:
            "Removing the common source of inaccuracy—<i>the students</i>—from the workflow, ESCORD will collaborate with only authorized personnels to ensure a more accurate and regulated data production.",
          showID: "3"
        },

        {
          icon: "",
          name: "MANAGING ACCOUNT",
          shortDesc:
            "ESCORD preserves its value for protecting stored data in the system through user accessibility restrictions set by the MIS Manager.",
          longDescTitle: "THE MIS MANAGER",
          longDesc:
            "Aside from setting the accessibility restriction for ESCORD users, the MIS Manager also has the authority to track changes made in the system; as well as to download PDF files of the scholastic record for uniform distribution among the department.",
          showID: "4"
        },
      ],
      isShown: null
    };
  },
  methods: {
    showMore(_shown){
      this.isShown === _shown? 
      this.isShown = null : 
      this.isShown = _shown

      console.log("Card Details Shown (ID): " + this.isShown)
    }
  }
};
</script>

<style lang="scss" scoped>

h3 {
    margin-bottom: 1rem !important;
    color: #2d2d2d !important;
    font-weight: bolder !important;
    text-shadow: 1px 1px 5px #ef6c0080;
}

h5 {
  font-weight: 500 !important;
}

.md-card {
  margin: 0.75rem 0.5rem !important;
  cursor: context-menu !important;
}

.__btn-p {
  margin: 0 !important;
}

.__feature-detail {
  padding: 1rem !important;
  text-align: justify;
}

.__shortDesc {
  margin-bottom: 1.25em !important;
}

.__team-member {
  margin: 0.5em 0.75em !important;
}

.__member_desc {
  margin-top: 0.75em !important;
}
</style>

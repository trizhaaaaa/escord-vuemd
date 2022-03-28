<template>
  <div id="about">
    <h1 class="landing-page-title">features and details</h1>

    <!-- FEATURE AND DETAIL LIST -->
    <div id="about-features">
      <ul>
        <li
          class="esc-feature"
          v-for="feature in features"
          v-on:click="feature.show = !feature.show"
          :key="feature.name"
        >
          <img class="featureIcon" v-bind:src="feature.icon" />
          <h1 class="featureName">{{ feature.name }}</h1>

          <div class="feature-details" v-show="feature.show">
            <h4 class="esc-feature-shortdesc">{{ feature.shortDesc }}</h4>
            <h3 class="esc-feature-longdesctitle">
              {{ feature.longDescTitle }}
            </h3>
            <p class="esc-feature-longdesc" v-html="feature.longDesc"></p>
          </div>
        </li>
      </ul>
    </div>

    <!-- TEAM MEMBERS LIST -->
    <div id="about-team">
      <h1 class="about-esc-team">the team</h1>
      <ul>
        <li v-for="member in team" :key="member.team" class="esc-team-member">
          <img class="member-pic" v-bind:src="member.pic" />
          <p class="member-name">{{ member.name }}</p>
          <p class="member-position">{{ member.position }}</p>
        </li>
      </ul>
    </div>

    <!-- ADDITIONAL INFO ABT ESCORD -->
    <div id="about-escord">
      <table>
        <tr>
          <td class="msg">
            ESCORD is a project developed by BSCS3A students from the University
            of Caloocan City - Congress Campus to fulfill the requirement on
            Software Engineering 1 and 2.
          </td>
        </tr>
        <tr>
          <td class="img">
            <img class="about-img" src="../assets/about-img.svg" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      team: [
        {
          pic: require("../assets/team-pictures/maglangit.jpg"),
          name: "TRIZHALYN L. MAGLANGIT",
          position: "Software Engineer",
        },

        {
          pic: require("../assets/team-pictures/porral.png"),
          name: "JACQUELINE C. PORRAL",
          position: "Associate Software Engineer",
        },

        {
          pic: require("../assets/team-pictures/ba-alan.jpg"),
          name: "NIKKI E. BA-ALAN",
          position: "Research Manager",
        },

        {
          pic: require("../assets/team-pictures/jolo.jpg"),
          name: "JERECHO L. JOLO",
          position: "Programmer",
        },

        {
          pic: require("../assets/team-pictures/walohan.jpg"),
          name: "JAYMAR M. WALOHAN",
          position: "Programmer",
        },

        {
          pic: require("../assets/team-pictures/bulaclac.jpg"),
          name: "JOHN PHILIP N. BULACLAC",
          position: "Graphic Designer",
        },

        {
          pic: require("../assets/team-pictures/canino.jpg"),
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
          show: false,
        },

        {
          icon: "",
          name: "ELIMINATES INACCURACY",
          shortDesc:
            "ESCORD's main objecive is to produce as much as accurately computed results reflected in a student's scholastic record and evaluation form as possible.",
          longDescTitle: "A TEAM OF PROFESSIONALS",
          longDesc:
            "Removing the common source of inaccuracy—<i>the students</i>—from the workflow, ESCORD will collaborate with only authorized personnels to ensure a more accurate and regulated data production.",
          show: false,
        },

        {
          icon: "",
          name: "UNIFORM LAYOUT",
          shortDesc:
            "ESCORD boasts a straightforward UI design that allows for catering a wider range of user.",
          longDescTitle: "CONSISTENT AND SYSTEMATIC DESIGN",
          longDesc:
            "It is uniformly built so that to maintain the user's familiarity with navigating through and using the system even with the account restriction changes taking place.",
          show: false,
        },

        {
          icon: "",
          name: "MANAGING ACCOUNT",
          shortDesc:
            "ESCORD preserves its value for protecting stored data in the system through user accessibility restrictions set by the MIS Manager.",
          longDescTitle: "THE MIS MANAGER",
          longDesc:
            "Aside from setting the accessibility restriction for ESCORD users, the MIS Manager also has the authority to track changes made in the system; as well as to download PDF files of the scholastic record for uniform distribution among the department.",
          show: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
#about > div {
  padding: 20px;
}
h1.featureName {
  color: #2d2d2d;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0px 2px 3px #ff9807;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
}
li.esc-feature {
  padding: 5px 25px 20px 25px;
  border: 4px solid #ff9807;
  border-radius: 15px;
  margin: 10px;
  background: #fff;
}
div.feature-details {
  padding-top: 10px;
}
h4.esc-feature-shortdesc {
  background: #fff1de;
  padding: 10px;
  margin: 10px 0 15px 0;
  border: 2px solid #ff9807;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0px 0px 6px #2d2d2d73;
}
h3.esc-feature-longdesctitle {
  text-align: right;
  padding: 3px 0px 10px 0;
  font-size: 22px;
}
p.esc-feature-longdesc {
  text-align: justify;
}
div#about-team {
  background: linear-gradient(#fff, #545454);
}
li.esc-team-member {
  padding-bottom: 15px;
}
img.member-pic {
  width: 100px;
  border: 4px solid #ff9807;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #000000;
}
p.member-name {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0px 0px 4px #545454;
  letter-spacing: 1px;
}
p.member-position {
  font-size: 16px;
  text-shadow: 0px 2px 3px #ff9807;
  color: #fff;
}
div#about-escord {
  background: #545454;
  color: #fff;
}
h1.about-esc-team {
  text-shadow: 0px 1px 1px #ff9807;
  text-align: left;
  margin-bottom: 30px;
}
img.about-img {
  width: 300px;
}
td.img {
  vertical-align: middle;
}
td.msg {
  text-align: justify;
  font-size: 22px;
  line-height: 35px;
}
</style>

<template>
  <div id="contact">
    <h1 class="landing-page-title">contact us</h1>

<center>
    <p>
      For inquiries about ESCORD or other provided services, you may refer to
      the provided contact information below to get in touch with the team.
    </p>

      <table>
        <tr class="w-margin-bottom">
          <td class="title">E-MAIL ADDRESS:</td>
          <td>ucc-escord.bscs2019@gmail.com</td>
        </tr>

        <tr><td height ="20" colspan="2"></td></tr>

        <tr>
          <td class="title">CONTACT NUMBERS:</td>
          <td>0923 435 2346/ 0978 356 8729</td>
        </tr>

        <tr class="w-margin-bottom">
          <td></td>
          <td class="sched">10AM-4PM | Mon-Fri</td>
        </tr>

        <tr><td height ="20" colspan="2"></td></tr>

        <tr>
          <td class="title">LANDLINE:</td>
          <td>(02) 9332 4355</td>
        </tr>

        <tr class="w-margin-bottom">
          <td></td>
          <td class="sched">10AM-4PM | Mon-Fri</td>
        </tr>
      </table>
  </center>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
};
</script>

<style scoped>
div#contact{
  height:500px
}
h1{
  margin-bottom: 40px;
}
p{
  max-width: 80%;
  margin-bottom: 30px;
  font-size: 1.4em;
}
tr {
  font-family: "Cuprum", sans-serif;
  font-size: 20px;
}
td {
  padding: 5px;
  vertical-align: middle;
  font-size: 1.3em;
}
td.title {
  font-weight: bold;
  text-align: right;
  font-size: 1.4em;
}
td.sched {
  font-size: 16px;
  text-shadow: 0px 0px 3px #ff9807;
}

@media screen and (max-width: 545px){
  td, td.title, td.sched{
    font-size: 100%;
  }
  p{
    font-size: 120%;
  }
}
</style>

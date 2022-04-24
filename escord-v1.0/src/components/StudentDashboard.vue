<template>
  <!-- <div id = "SDashboard">-->
<div class = "container">
    <!-- <div>Student Name <input type = "text">
    Student Yr/Sec <input type = "text">
    Semester <input type = "text">
    School year <input type = "text"></div>-->
      <div class = "box">
          <div class = "icon">01</div>
          <div class = "content">
              <h3>SCHOLASTIC RECORD</h3>
              <p>You can see your Scholastic Record just click the button below </p>
              <a href="#">Click here</a></div>
      </div>
        <div class = "box">
          <div class = "icon">02</div>
          <div class = "content">
              <h3>SUMMARY OF GRADES</h3>
               <p>You can see your Summary of Grades just click the button below</p>
              <a href="#">Click here</a></div>
      </div>
  </div>
</template>

<!--<script>
export default {

div#SDashboard{
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
font-family: 'Poppins', sans-serif;
}
}
</script>-->

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.container .box
{
    justify-content: center;
    align-items: center;
    width: 350px;
    padding: 40px;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    border-radius: 4px;
    margin: 20px;
    box-sizing: border-box ;
    overflow: hidden;
    text-align: center;

}

.container .box .icon
{
    position: relative;
    width: 80px;
    height: 80px;
    color: #fff;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    font-size: 40px;
    font-weight: 700;
    transition: 1s;
}
.container .box:nth-child(1) .icon
{
    box-shadow: 0 0 0 0 #e26d5c;
    background: #e26d5c;
}
.container .box:nth-child(1):hover .icon
{
    box-shadow: 0 0 0 400px #e26d5c;
}
.container .box:nth-child(2) .icon
{
    box-shadow: 0 0 0 0 #854136;
    background: #854136;
}
.container .box:nth-child(2):hover .icon
{
    box-shadow: 0 0 0 400px #854136;
}
.container .box .content
{
    position: relative;
    z-index: 1;
    transition: 0.5s;
}
.container .box:hover .content
{
    color: #fff;
}
.container .box .content h3
{
    font-size: 20px;
    margin: 10px 0;
    padding: 0;
}
.container .box .content p
{
    margin: 0;
    padding: 0;
}
a{
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    margin-top: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0, .2);
}
.label
{
    position: relative;
    text-align: right;
}
</style>

<template>
  <div class="welcome">
    <ul>
      <li>
        <img src="@/assets/img/1.jpg" alt />
      </li>
      <li>
         <p>
           <span>WELCOME TO</span>
            <span>RAMBLE</span>
           </p> 
         
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincidid ut labore et dolore magna aliqua. Utjij enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi utjjij aliquip ex ea commodo consequat.ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.ed do eiusmod tempor incididuenimdunt.</span>
        <span>Fipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoed doeiumod tempoquis</span>
        <span>
          <i>in</i>
          <i>☌</i>
          <i>t</i>
          <i>G</i>
          <i>f</i>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scope>
.welcome {
  width: 100vw;
  height: 560px;
  background: #f9f9f9;
  ul {
    display: flex;
    height: 560px;

    li {
      flex: 1;
      height: 560px;
      list-style: none;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
      p {
        font-size: 25px;
        width: 90%;
        height: 100px;
        line-height: 100px;
        margin-top: 50px;
        padding-left: 50px;
        span:nth-child(1){
          width: 200px;
          height: 100px;
          line-height: 100px;
          color:#000;
          margin-left:0
        }
        span {
          margin-left:0;
          width: 200px;
          height: 100px;
          line-height: 100px;
          color: orange;
          font-size: 25px;
        }
      }
      span {
        width: 70%;
        height: 50px;
        display: inline-block;
        margin-top: 20px;
        font-size: 16px;
        margin-left: 50px;
        i {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          color: orange;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 20px;
          background: #fff;
        }
        i:hover {
          color: #fff;
          background: orange;
          border: 1px solid orange;
        }
      }
    }
  }
}
</style>
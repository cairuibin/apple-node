<template>
  <!-- 公共底部模块 -->
  <div class="footer">
    <div class="footer-top">
      <div class="top-content">
        <div class="text-plate">
          <div class="text-left">
            <a href>
              <img src="@/assets/logo.png" alt />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing ejlit, sed do eiusmod tempor incididunt ut labore egtt dolore magna aliqua. Ut enim ad minim veniam, quisgt nostrud exercitation ullamco laboris.</p>
            <div>icon</div>
          </div>
          <div class="text-middle">
            <h4 class="footer__title">LATEST TWEETS</h4>
            <div class="middle-box">
              <p>Lorem ipsum dolor sit am ectetur adip isicing elit, sed eiusmod ipsum dolo hgtfed</p>
              <a href>https://meili.com</a>
            </div>
            <div class="middle-box">
              <p>Lorem ipsum dolor sit am ectetur adip isicing elit, sed eiusmod ipsum dolo hgtfed</p>
              <a href>https://meili.com</a>
            </div>
          </div>
          <div class="text-right">
            <h4 class="footer__title">TAG</h4>
            <ul>
              <a href="#">Adventure</a>
              <a href="#">Traveling</a>
              <a href="#">Countries</a>
              <a href="#">Beach</a>
              <a href="#">Honeymoon</a>
              <a href="#">Island</a>
              <a href="#">Parks</a>
              <a href="#">Family</a>
              <a href="#">Travel</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="bottom-content">
        <span>JOIN THE NEWSLETTER</span>
        <input type="text" placeholder="Enter your E-mail" />
        <button>
          <a href="#">SUBCRIBES</a>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scope>
.footer {
  width: 100vw;
  .footer-top {
    width: 100vw;
    height: 450px;
    background: rgba(0, 0, 0, 0) no-repeat scroll center center / cover;
    background-image: url(../assets/bg/3.jpg);
  }
  .footer-bottom {
    width: 100vw;
    height: 205px;
    background: #090909;
    display: flex;
    justify-content: space-around;
    .bottom-content {
      width: 1044px;
      height: 40px;
      margin: 0 auto;
      padding-top: 80px;
      span {
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        margin-top: 10px;
        float: left;
      }
      input {
        width: 294px;
        float: left;
        height: 45px;
        border: 0;
        border-bottom: 1px solid #6d6b67;
        color: #6d6b67;
        padding-left: 11px;
        background: 0;
        margin-left: 145px;
        line-height: 45px;
      }
      button {
        width: 130px;
        height: 40px;
        background: 0;
        margin-left: 103px;
        line-height: 40px;
        outline: none;
        border: 0;
        a {
          border-radius: 50px;
          border: 1px solid #bf8703;
          display: block;
          width: 100%;
          height: 100%;
          color: #fff;
          transition: all 1s;
        }
        a:hover {
          background: #ffa500;
        }
      }
    }
  }
}
.top-content {
  width: 100vw;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.7);
  padding-top: 70px;
  color: #fff;
  .text-plate {
    width: 1188px;
    height: 380px;
    margin: 0 auto;
  }
}
.text-left {
  float: left;
  p {
    margin: 45px 0;
    width: 379px;
    color: #fff;
  }
  ul {
    a {
      display: block;
      float: left;
      width: 40px;
      height: 40px;
      color: #ffa500;
      border: 1px solid #f3f3f3;
      text-align: center;
      line-height: 40px;
      margin-right: 14px;
      transition: all 0.5s;
    }
    a:hover {
      background: #ffa500;
      color: #fff;
    }
  }
}
.text-middle {
  float: left;
  margin-left: 30px;
  .middle-box {
    margin: 25px 0;
    p {
      width: 328px;
      color: #fff;
    }
    a {
      color: #ffa500;
    }
  }
}
.footer__title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 42px;
  text-transform: uppercase;
}
.text-right {
  float: left;
  margin-left: 42px;
  width: 400px;
  ul {
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    a {
      display: block;
      width: 122px;
      height: 40px;
      border-radius: 50px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #fff;
      font-size: 14px;
      color: #fff;
      transition: all 1s;
      margin-right: 10px;
      margin-bottom: 20px;
    }
    a:hover {
      background: #ffa500;
    }
  }
}
</style>
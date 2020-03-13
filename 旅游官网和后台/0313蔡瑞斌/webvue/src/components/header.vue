<template>
  <div>
    <el-dialog title="Login Hare" :visible.sync="dialogVisible" width="30%">
      <div>
        <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="user"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-sugar" v-model="pwd"></el-input>
        <el-input
          v-show="reShow"
          placeholder="请输入邮箱"
          prefix-icon="el-icon-user"
          v-model="email"
          type="email"
        ></el-input>
        <el-input
          v-show="reShow"
          placeholder="请输入年龄"
          prefix-icon="el-icon-sugar"
          v-model="age"
          type="number"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginIn">确 定</el-button>
      </span>
    </el-dialog>

    <div class="meili_header">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="nav">
        <div class="top_nav">
          <span
            class="span_a"
          >Contact:0088-234-675-827 Opening Hours: Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
          <span v-show="!isLogin" class="span_btn" @click="register('re')">注册</span>
          <span v-show="!isLogin" class="span_btn" @click="register('login')">登陆</span>
          <span v-show="isLogin">欢迎回来!{{getCookie('user')}}</span>
          <span v-show="isLogin" @click="loginOut">退出!</span>
        </div>
        <div class="bot_nav">
          <router-link
            active-class="nav_active"
            :to="item.path"
            v-for="item in nav"
            :key="item.key"
            tag="span"
            @click.native="navClick(item.key)"
          >{{item.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
      email: "",
      age: "",
      url: this.reShow ? "/register" : "/login?a=1",
      dialogVisible: false,
      reShow: false,
      isLogin: this.getCookie("user") === null ? false : true,
      nav: [
        {
          name: "首页",
          path: "/home/main",
          key: "first"
        },
        {
          name: "关于我们",
          path: "/home/ours",
          key: "ours"
        },
        {
          name: "服务",
          path: "/home/serve",
          key: "serve"
        },
        {
          name: "产品",
          path: "/home/product",
          key: "product"
        },
        {
          name: "画册",
          path: "/home/pic",
          key: "pic"
        },
        {
          name: "游记",
          path: "/home/book",
          key: "book"
        },
        {
          name: "联系我们",
          path: "/home/contcat",
          key: "contcat"
        }
      ]
    };
  },
  methods: {
    async register(type) {
      this.dialogVisible = true;

      this.reShow = type === "login" ? false : true;
    },

    loginIn() {
      const {
        user,
        pwd,
        email,
        age,
        reShow,
        $regType,
        $isNull,
        dataJson
      } = this;

      let isObj = [
        dataJson("用户名", user, "user"),
        dataJson("密码", pwd, "pwd")
      ];

      if (reShow) {
        isObj = [
          ...isObj,
          dataJson("邮箱", email, "email"),
          dataJson("年龄", age, "num")
        ];
      }

      $isNull(isObj, () => $regType(isObj, this.requestFunc));
    },

    async requestFunc() {
      const {
        user,
        pwd,
        email,
        age,
        reShow,
        url,
        $message,
        $http,
        $md5,
        setCookie,
        $httpSuccess
      } = this;
      let subData = { user, pwd, email, age };
      $httpSuccess(["post", url, subData], (data, msg) => {
        if (!reShow) {
          setCookie("user", user);
          this.isLogin = true;
        }
        this.dialogVisible = false;
        $message.success(msg);
      });
    },

    loginOut() {
      const { $httpSuccess } = this;
      this.clearCookie("user");
      $httpSuccess(["get", "/login/out"], () => (this.isLogin = false));
    },
    navClick(key) {
      sessionStorage.setItem("nowNav", key);
      let res = key === "first" ? true : false;
      this.$emit("changeIsShow", res);
    }
  }
};
</script>
<style scoped>
.meili_header {
  width: 1000px;
  height: 65px;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 100;
  color: #fff;
}
.logo {
  width: 200px;
  float: left;
  height: 65px;
}
.nav {
  width: 800px;
  height: 65px;
  float: left;
}

.top_nav,
.bot_nav {
  line-height: 30px;
  height: 30px;
}
.bot_nav {
  padding: 0 50px;
  text-align: center;
}

.bot_nav span {
  width: 100px;
  float: left;
}
.top_nav {
  padding-bottom: 2px;
  border-bottom: 1px solid #ddd;
}
.top_nav .span_a {
  font-size: 14px;
  width: 600px;
  float: left;
}
.top_nav .span_btn {
  width: 100px;
  float: right;
  text-align: center;
}
.nav_active {
  color: orange;
}
</style>
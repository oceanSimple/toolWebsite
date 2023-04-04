<template>
  <div>
    <el-container>
      <!--导航栏-->
      <el-aside width="150px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
              <el-menu-item index="1" @click="asideButtonRouter('/DDLPage')">
                <i class="el-icon-menu"></i>
                <span slot="title">DDL</span>
              </el-menu-item>
              <el-menu-item index="2" @click="asideButtonRouter('/DMLPage')">
                <i class="el-icon-menu"></i>
                <span slot="title">DML</span>
              </el-menu-item>
              <el-menu-item index="3" @click="asideButtonRouter('/DQLPage')">
                <i class="el-icon-menu"></i>
                <span slot="title">DQL</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>


      <el-container>
        <el-header style="height: 50px">
          <el-page-header @back="goBack" :content="headerContent" style="line-height: 50px">
          </el-page-header>
        </el-header>

        <el-main style="height: 600px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "MysqlPage",
  data() {
    return {
      headerContent: 'DDL页面',
    }
  },
  methods: {
    // 导航栏跳转功能区方法
    asideButtonRouter(url) {
      this.$router.push('/mysqlPage' + url);
      this.headerContent = url.slice(1,4) + '页面';
    },
    // 页头的返回按钮方法，返回到主界面
    goBack() {
      this.$router.push('/mainPage');
    }
  }
}
</script>

<style scoped>
.el-header {
  color: #333;
  text-align: center;
}

.el-aside {
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}
</style>
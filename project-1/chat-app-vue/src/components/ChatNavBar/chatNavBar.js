// @ts-nocheck
/**
 * File: src/components/ChatNavBar/chatNavbar.js
 * Date: 29/01/2020
 * Description:
 * Author: Glaucia Lemos
 */

import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'ChatNavBar',

  computed: {
    ...mapState([
      'user',
      'reconnect',
    ]),
  },

  methods: {
    ...mapActions([
      'logout',
      'login',
    ]),
    ...mapMutations([
      'setReconnect',
    ]),
    onLogout() {
      this.$router.push({ path: '/' });
      this.logout();
    },
    unload() {
      if (this.user.username) {
        this.setReconnect(true);
      }
    },
  },

  mounted() {
    window.addEventListener('beforeunload', this.unload);
    if (this.reconnect) {
      this.login(this.user.username);
    }
  },
};

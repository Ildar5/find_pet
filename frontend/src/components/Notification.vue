<template>
  <div v-if="isNotificationAvailable" :class="$style.container">
    <b-notification
      :type="type"
      :class="$style.notification"
      :active.sync="isActive"
      :position="'is-top-right'"
      has-icon
      aria-close-label="Close notification"
      indefinite
      role="alert"
      @close="onClose"
    >
      <span :class="$style.msg">{{ msg }}</span>
    </b-notification>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { NotificationProgrammatic as Notification } from "buefy";

export default {
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    ...mapGetters("notificationsModule", ["msg", "type"]),

    isNotificationAvailable() {
      return Boolean(this.msg) && Boolean(this.type);
    }
  },

  methods: {
    ...mapActions("notificationsModule", ["clearNotification"]),

    onClose() {
      this.isActive = false;
      this.clearNotification();
    }
  },

  watch: {
    msg(newValue, oldValue) {
      this.isActive = true;
    }
  }
};
</script>

<style lang="less" module>
.container {
  position: fixed;
  top: 15px;
  left: 50%;
  width: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
  .notification {
    .msg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
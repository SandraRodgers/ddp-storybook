<template>
  <component
    :is="tag"
    :href="href && href.length > 0 ? href : null"
    class="dg-button"
    :class="[quickActionClass, variant, isDark]"
    :type="!href && type"
    :target="href && target ? target : null"
    @click="onClick"
  >
    <div v-if="iconSide === 'left'" :class="iconClass">
      <slot></slot> <span>{{ label }}</span>
    </div>
    <div v-if="iconSide === 'right'" :class="iconClass">
      <span>{{ label }}</span
      ><slot></slot>
    </div>
    <div v-if="isQuickAction" class="icon-qab">{{ label }}</div>
    <div v-else>
      {{ label }}
    </div>
  </component>
</template>

<script>
import { computed } from "vue";
export default {
  name: "DGButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    // The default '' is primary. Other variants are 'secondary', 'ghost', and 'ghost-secondary'.
    variant: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "secondary", "ghost", "ghost-secondary"].includes(
          value.toLowerCase()
        );
      },
    },
    theme: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "dark"].includes(value.toLowerCase());
      },
    },
    href: { type: String },
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "submit", "reset"].includes(value.toLowerCase());
      },
    },
    target: {
      type: String,
      default: null,
      validator: (value) => {
        return ["_self", "_blank", "_parent", "_top"].includes(
          value.toLowerCase()
        );
      },
    },
    // Default is no icon. Can use 'left' or 'right' icon.
    iconSide: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "left", "right"].includes(value.toLowerCase());
      },
    },
    isQuickAction: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    // events emittted
    function onClick() {
      emit("click");
    }

    // computed attributes
    const tag = computed(() => {
      return props.href ? "a" : "button";
    });

    const quickActionClass = computed(() => {
      return props.isQuickAction ? "qab" : "standard";
    });

    const iconClass = computed(() => {
      if (props.icon === "left") {
        return "icon-left";
      } else if (props.icon === "right") {
        return "icon-right";
      } else {
        return "";
      }
    });
    const isDark = computed(() => {
      if (props.theme === "dark") {
        return "dark";
      } else {
        return "";
      }
    });

    return {
      onClick,
      tag,
      iconClass,
      isDark,
      quickActionClass,
    };
  },
};
</script>

<style>
.dg-button {
  @apply flex justify-center items-center;
  @apply font-bold;
  @apply text-base;
  @apply leading-4;
  @apply outline-none;

  @apply whitespace-nowrap;
  @apply bg-meadow;
  @apply text-darkCharcoal;

  &.standard {
    @apply py-2 px-6;
    height: 42px;
    width: fit-content;
  }

  &.qab {
    width: fit-content;
    @apply rounded-full;
  }

  &:hover {
    background-color: #5cf0bb;
    @apply text-darkCharcoal;
  }
  &:active {
    @apply bg-meadow;
    box-shadow: inset 3px 4px 4px rgba(0, 0, 0, 0.15);
    @apply text-darkCharcoal;
  }
  &:disabled {
    box-shadow: none;
    @apply border-steel border-2;
    @apply bg-steel;
  }

  &.secondary {
    @apply bg-darkCharcoal;
    @apply text-white;
  }
  &.ghost {
    border-width: 2px;
    @apply bg-transparent;
    border: solid 2px #008752;
    color: #008752;

    &:hover {
      @apply border-evergreen;
      @apply text-evergreen;
    }

    &:active {
      @apply border-grass;
      @apply text-grass;
      box-shadow: none;
    }

    &:disabled {
      @apply border-storm;
      @apply text-storm;
    }

    &.dark {
      @apply text-meadow;
      @apply border-meadow;

      &:hover {
        border: 2px solid #5cf0bb;
        color: #5cf0bb;
      }

      &:active {
        border: 2px solid #2ec28d;
        color: #2ec28d;
        box-shadow: none;
      }

      &:disabled {
        @apply border-stone;
        @apply text-stone;
      }
    }
  }

  &.ghost-secondary {
    border-width: 2px;
    @apply bg-transparent;
    @apply border-darkCharcoal;
    @apply text-darkCharcoal;

    &:hover {
      border: solid 2px #0a121b;
      color: #0a121b;
    }

    &:active {
      border: solid 2px #000000;
      color: #000000;
      box-shadow: none;
    }

    &:disabled {
      @apply border-storm;
      @apply text-storm;
    }
  }

  &.dark {
    @apply text-mist;
    @apply border-mist;

    &:hover {
      @apply text-white;
      @apply border-white;
    }

    &:active {
      @apply text-casper;
      @apply border-casper;
      box-shadow: none;
    }

    &:disabled {
      @apply border-stone;
      @apply text-stone;
    }
  }
  .icon-left,
  .icon-right {
    @apply flex items-center space-x-1;
  }
  .icon-qab {
    @apply flex justify-center items-center;
    @apply w-10 h-10;
    @apply rounded-full;
  }
}
</style>

<template>
  <div id="filters">
    <div v-for="filter in filters" :key="filter.value"
      :class="['filter-div', { active: activeFilter === filter.value }]" @click="selectFilter(filter.value)">
      {{ filter.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DataFilter",
  props: {
    filters: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activeFilter: "all",
    }
  },
  methods: {
    selectFilter(filter) {
      this.activeFilter = this.activeFilter === filter ? "all" : filter
      this.$emit("filter-changed", this.activeFilter)
    },
  },
}
</script>

<style>
#filters {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.filter-div {
  margin: 0 10px;
  cursor: pointer;
}

.filter-div:hover {
  color: red;
  font-weight: bold;
}

.filter-div.active {
  font-weight: bold;
  color: red;

}

.filter-div {
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.filter-div.active {
  color: red;
}

.filter-div::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-image: url('../assets/star.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  z-index: -1;
}

.filter-div:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  #filters {
    gap: 10px;
  }

  .filter-div {
    font-size: 14px;
    padding: 6px 10px;
  }

  .filter-div::before {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  #filters {
    flex-direction: column;
    gap: 8px;
  }

  .filter-div {
    font-size: 12px;
    padding: 5px 8px;
    width: 100%;
    text-align: center;
  }

  .filter-div::before {
    width: 25px;
    height: 25px;
  }
}
</style>

<script lang="ts">
    import List from './List.svelte';
    import { Tab } from './types';
    import TabManager from './Tab.manager.svelte';

    let selectedTab = Tab.TODO;
    const handleTabChange = (tab: Tab) => {
        selectedTab = tab;
    }
</script>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: clamp(500px, 50%, 1000px);
        height: 100%;
        max-height: 70%;
    }

    :global(button, input) {
        margin: 0;
    }
</style>

<div class="main">
    <div class="container">
        <TabManager onTabChange={handleTabChange} selectedTab={selectedTab} />
        <List selectedTab={selectedTab} />
    </div>
</div>

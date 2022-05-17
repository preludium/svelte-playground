<script lang="ts">
    import { v4 as uuidv4 } from 'uuid';
    import { Tab, Todo } from './types';
    import Element from './Element.svelte'

    export let selectedTab: Tab = Tab.TODO;
    let todoList: Todo[] = [];
    let newTodoTitle = '';
    let filteredTodoList: Todo[] = [];

    $: filteredTodoList = selectedTab === Tab.ALL
        ? todoList
        : todoList.filter((todo) => selectedTab === Tab.DONE ? todo.done : !todo.done);
	
	const addToList = () => {
        if (newTodoTitle.trim() === '') return;
		todoList = [ ...todoList, { id: uuidv4(), title: newTodoTitle, done: false } ];
		newTodoTitle = '';
	}
	
	const handleDelete = (id: Todo['id']) => {
		todoList = todoList.filter((todo) => todo.id !== id);
    }
</script>


<style> 
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        height: 100%;
        overflow: auto;
    }

    .input-wrapper {
        display: flex;
        gap: 1rem;
    }

    .input {
        margin: 0;
        width: 100%;
    }
</style>

<div class="wrapper">
    {#each filteredTodoList as todo}
        <Element
            bind:element={todo}
            onDelete={handleDelete}
        />
    {/each}
</div>

<form class="input-wrapper" on:submit|preventDefault={addToList}>
    <input class="input" bind:value={newTodoTitle} type="text">
    <button>➕</button>
</form>
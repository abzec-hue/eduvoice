<script>
    import { templates } from '$lib/data/templates.js';
</script>

<style>
    .sidebar {
        background: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 15px;
        max-height: 400px;
        display: flex;
        flex-direction: column;
    }
    
    .title {
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
        font-size: 16px;
        text-align: center;
    }
    
    .template-list {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .template {
        padding: 10px;
        margin-bottom: 8px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .template:hover {
         background-color: #f5f5f5;
        background: #e9f7fe;
         transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-color: #3BB3FF;
    }
    
    .template-name {
        font-weight: 500;
        margin-bottom: 4px;
    }
    
    .template-category {
        font-size: 12px;
        color: #666;
        background: #f0f0f0;
        padding: 2px 6px;
        border-radius: 3px;
    }
</style>

<div class="sidebar">
    <div class="title">Templates</div>
    
    <!-- Template List - All Categories -->
    <div class="template-list">
        {#each templates as template}
            <div class="template" 
                 draggable="true"
                 on:dragstart={(e) => e.dataTransfer.setData('text/plain', template.content)}
                 on:click={() => dispatch('templateDrop', { text: template.content })}> 
                <div class="template-name">{template.name}</div>
                <div class="template-category">{template.category}</div>
            </div>
        {/each}
    </div>
</div>

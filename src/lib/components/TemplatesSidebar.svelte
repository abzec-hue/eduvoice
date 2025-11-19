<script>

    import { templates } from '$lib/data/templates.js';
    
    function handleDragStart(event, template) {
        event.dataTransfer.setData('text/plain', template.content);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const templateContent = event.dataTransfer.getData('text/plain');
        dispatch('templateDrop', { text: templateContent });
    }
    
</script>

<style>
    .templates-sidebar {
        background: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
         box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        height: fit-content;
    }

    .templates-title {
        font-weight: bold;
        margin-bottom: 15px;
        color: #333;
        font-size: 16px;
        text-align: center;
    }

    .template-item {
        padding: 12px;
        margin-bottom: 10px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        user-select: none;
    }

    .template-item:hover {
        background: #e9f7fe;
        border-color: #3BB3FF;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .template-item:active {
        cursor: pointer;
    }

    .template-name {
        font-weight: 500;
        color: #333;
        margin-bottom: 5px;
    }

    .template-category {
        font-size: 12px;
        color: #666;
        background: #f0f0f0;
        padding: 2px 6px;
        border-radius: 3px;
        display: inline-block;
    }
</style>

<div class="templates-sidebar">
    <div class="templates-title">Templates</div>
    {#each templates as template}
        <div class="template-item" 
             draggable="true"
             on:dragstart={(e) => handleDragStart(e, template)}>
            <div class="template-name">{template.name}</div>
            <div class="template-category">{template.category}</div>
        </div>
    {/each}
</div>

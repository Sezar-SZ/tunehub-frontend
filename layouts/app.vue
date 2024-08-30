<template>
    <div class="w-screen h-screen bg-dark flex">
        <PlaylistsSidebarComponent />
        <div class="w-full h-full flex flex-col">
            <PlaylistsSearchComponent />
            <slot />
        </div>
    </div>
</template>

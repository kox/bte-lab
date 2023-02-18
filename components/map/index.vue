<template>
    <div class="flex flex-col">
        <div class="w-full h-full">
            <div id="map" class="w-full h-full"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Map",
    mounted() {
        this.initMap();
    },
    methods: {
        async initMap() {
            const location = await this.getLocation('Av. de les Tres Creus, 2, 46014 València, Valencia, Spain');
            const map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 15
            });
            new google.maps.Marker({
                position: location,
                map: map
            });
        },
        getLocation(address) {
            return new Promise((resolve, reject) => {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: address }, (results, status) => {
                    if (status === 'OK') {
                        resolve(results[0].geometry.location);
                    } else {
                        reject(new Error('Geocode was not successful for the following reason: ' + status));
                    }
                });
            });
        }
    }
};
</script>

<style>
#map {
    width: 100%;
    height: 100%;
}
</style>

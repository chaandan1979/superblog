<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Category List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Category</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-tools float-right align-right"><button class="btn btn-primary"><router-link to="/add-category" style="color: #fff">Add Category</router-link></button></div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"></div></div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting_asc">Sl No.</th>
                                                <th class="sorting">Category Name</th>
                                                <th class="sorting">Created Date</th>
                                                <th class="sorting">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr role="row" class="odd" v-for="(category,index) in getAllCategory" :key="category.id">
                                                <td class="sorting_1">{{index+1}}</td>
                                                <td>{{category.cat_name}}</td>
                                                <td>{{category.created_at|dateformat}}</td>
                                                <td><router-link :to="`/edit-category/${category.id}`">Edit</router-link> | <a href="" @click.prevent="deletecategory(category.id)">Delete</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "List",
        mounted() {
            this.$store.dispatch('allCategory')
        },
        computed:{
            getAllCategory(){
                return this.$store.getters.getCategory
            }
        },
        methods:{
            deletecategory(id){
               console.log(id);
                axios.get('/category/'+id)
                    .then(()=>{
                        this.$store.dispatch('allCategory')
                        Toast.fire({
                            icon: 'success',
                            title: 'Category Deleted successfully'
                        })
                    })
                    .catch(()=>{

                    })
            }
        }

    }
</script>

<style scoped>

</style>

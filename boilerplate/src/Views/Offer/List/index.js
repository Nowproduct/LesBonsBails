import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import API from '../../../components/api'

const root = {
    flexGrow: 1,
    testAlign : "center",
  }

  const style ={
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px"
  }
class ListOffer extends Component {

  constructor (props) {
    super(props);
    
    this.state = {
        page: 1,
        limit: 10,        
        articles : []
    };
    const data = {
      limit: 10,
      page: 1
    }

    let self = this;
    API.post('articles/recent', data, {
    headers: {
      'authorization': 'Bearer ' + self.props.user[0].token
    }}).then (function (res) {
          self.setState({
              articles: res.data.data
            })
          console.log('articles ' + self.state.articles)
      }).catch(function(res) {
          console.log('error -- ' + res);
        })
    console.log('token',this.props.user[0].token)
}

  render() {

    let articles = []

    if (this.state.articles)
    {
      this.state.articles.map((article) => {
        articles.push(
        <Grid item xs={24} sm={8} style={style}>
        <Paper className={root}>
          <Grid container spacing={16}>
            <Grid item>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {article.name}
                  </Typography>
                  <Typography gutterBottom>
                    {article.description}
                  </Typography>
                  <Typography color="textSecondary"></Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ cursor: "pointer" }}>
                    Acheter
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">€{article.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      );
      return articles
      })
    }

  return (
    <div className={root}>
      <Grid container>
      {articles}
      </Grid>
    </div>
  );
  }
}


const mapStateToProps = state => 
{
  return { user: state.user };
};
export default connect(mapStateToProps)(ListOffer);
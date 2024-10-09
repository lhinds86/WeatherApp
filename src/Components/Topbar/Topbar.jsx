import styles from './Topbar.module.css'



function Topbar({label}) {
    return (
      <div id='home' className={styles.topbarContainer}>
        <div className={styles.toggleContainer}>
            {label}{" "}
            <div className={styles.toggleSwitch}>
                <input type="checkbox" className={styles.checkbox} 
                    name={label} id={label} />
                <label className={styles.label} htmlFor={label}>
                <span className={styles.inner} />
                <span className={styles.classNameswitch }/>
        </label>
      </div>
    </div>

        <input
            className={styles.searchInput} 
            type='text'
            placeholder='Enter City'
       />
        
        <button className={styles.locationBtn}> Current Location</button>
      </div>
    )
  }
  
  export default Topbar;